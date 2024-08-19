import Cookies from "js-cookie";

export default class Api {
    static baseUrl =
        process.env.BASE_URL || "https://portfolio-test-rosy.vercel.app";
    static token = Cookies.get("token");

    static async get(url: string, token = true, params = {}, headers = {}) {
        try {
            const query = new URLSearchParams(params).toString();
            const response = await fetch(`${this.baseUrl}${url}?${query}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${this.token}` : "",
                    ...headers,
                },
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    static async post(url: string, data = {}, token = true, headers = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${this.token}` : "",
                    ...headers,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    static async put(url: string, data = {}, token = true, headers = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${url}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${this.token}` : "",
                    ...headers,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    static async delete(url: string, token = true, headers = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${url}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${this.token}` : "",
                    ...headers,
                },
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }
}
