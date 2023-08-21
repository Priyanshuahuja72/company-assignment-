import axios from "axios";

export class UsersService
{
    //Creating a private variable for storing the url
    private static URL:string = 'https://jsonplaceholder.typicode.com';

    // getting the data from axios
    public static getAllUsers()
    {
        let UserURL:string = `${this.URL}/posts`;

        return axios.get(UserURL)
    }
}