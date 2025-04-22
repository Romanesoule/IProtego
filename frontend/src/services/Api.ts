import axios, {AxiosInstance} from "axios";

class Api {

    private key: string;

    private baseURL = "http://localhost:8000";
    private headers: { "Content-Type": "application/json" };
    protected http: AxiosInstance;

    constructor() {
        this.http = axios.create({
            baseURL : this.baseURL,
            headers: this.headers
        });
    }

    getBasePath()
    {
        return `${this.baseURL}/${this.key}`;
    }

    getCustomPath(command: string)
    {
        return `${this.getBasePath()}/${command}`;
    }

    async create(incomeData)
    {
        return this.http.post(this.getBasePath(), incomeData);
    }

    async getAll()
    {
        return this.http.get(this.getBasePath());
    }

    async getOne(id: string)
    {
        return this.http.get(this.getCustomPath(id));
    }

    async update(id: string)
    {
        return this.http.put(this.getCustomPath(id));
    }

    async delete(id: string)
    {
        return this.http.delete(this.getCustomPath(id));
    }
}

export default Api;