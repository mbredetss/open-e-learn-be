import { Pool } from 'pg'
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

class RegistrationRepositories {
    constructor() {
        this.pool = new Pool();
    }

    async createUser(username, email, phone, password) {
        const id = `users-${nanoid(16)}`;
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdAt = new Date();
        const updatedAt = createdAt;

        const result = await this.pool.query(
            `INSERT INTO users 
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING id`, [ id, username, email, phone, hashedPassword, createdAt, updatedAt ]
        );
        
        return result.rowCount > 0;
    }
}

export default new RegistrationRepositories();