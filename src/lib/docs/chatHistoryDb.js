/**
 * IndexedDB Utility for persistent Chatbot Question & Answer history storage
 */

const DB_NAME = 'WeblingsDocsChatDB'
const DB_VERSION = 1
const STORE_NAME = 'chat_history'

/**
 * Open or initialize the IndexedDB connection
 */
export function openChatDB() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      return reject(new Error('IndexedDB is not supported in this environment.'))
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' })
        store.createIndex('timestamp', 'timestamp', { unique: false })
      }
    }

    request.onsuccess = (event) => {
      resolve(event.target.result)
    }

    request.onerror = (event) => {
      reject(event.target.error)
    }
  })
}

/**
 * Load all stored chat messages from IndexedDB
 */
export async function loadChatHistory() {
  try {
    const db = await openChatDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly')
      const store = tx.objectStore(STORE_NAME)
      const request = store.getAll()

      request.onsuccess = () => {
        const messages = request.result || []
        // Sort by timestamp ascending
        messages.sort((a, b) => (a.timestamp || a.id) - (b.timestamp || b.id))
        resolve(messages)
      }

      request.onerror = (event) => {
        reject(event.target.error)
      }
    })
  } catch (error) {
    console.error('Error loading chat history from IndexedDB:', error)
    return []
  }
}

/**
 * Save a single chat message (user question or bot answer) to IndexedDB
 */
export async function saveChatMessage(message) {
  try {
    const db = await openChatDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      const messageToSave = {
        ...message,
        timestamp: message.timestamp || Date.now(),
      }
      const request = store.put(messageToSave)

      request.onsuccess = () => {
        resolve(messageToSave)
      }

      request.onerror = (event) => {
        reject(event.target.error)
      }
    })
  } catch (error) {
    console.error('Error saving chat message to IndexedDB:', error)
  }
}

/**
 * Save multiple chat messages in bulk
 */
export async function saveAllChatMessages(messages) {
  try {
    const db = await openChatDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      messages.forEach((msg) => {
        store.put({
          ...msg,
          timestamp: msg.timestamp || msg.id || Date.now(),
        })
      })

      tx.oncomplete = () => {
        resolve(true)
      }

      tx.onerror = (event) => {
        reject(event.target.error)
      }
    })
  } catch (error) {
    console.error('Error saving bulk chat messages to IndexedDB:', error)
  }
}

/**
 * Clear all chat history from IndexedDB
 */
export async function clearChatHistoryDB() {
  try {
    const db = await openChatDB()
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      const request = store.clear()

      request.onsuccess = () => {
        resolve(true)
      }

      request.onerror = (event) => {
        reject(event.target.error)
      }
    })
  } catch (error) {
    console.error('Error clearing chat history from IndexedDB:', error)
  }
}
