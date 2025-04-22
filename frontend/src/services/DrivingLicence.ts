import axios from "axios";
import Api from "@/services/Api";

class DrivingLicence extends Api {

    key = 'driving-licence';

    async uploadFile(file: File) {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('file', file);

        return this.http.post(this.getCustomPath('upload'), formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
    }
}

export default new DrivingLicence();
