export interface  header { 
    navBar:NavBar
}

export interface NavBar {
    logo:any
    links: {
        label: string;
        path: string;
    }[];
    action: {
        label: string;
        link: string;
    };
}
