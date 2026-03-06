### 1. Endpoint Authentication

**Endpoint:** `POST /auth`
**Deskripsi:** Mengautentikasi pengguna dan mengembalikan *access token* serta *refresh token*.

| ID Test | Skenario Pengujian | Input Payload (Request Body) | Ekspektasi Status Code | Ekspektasi Respons |
| --- | --- | --- | --- | --- |
| **AUTH-01** | **(Positif)** Login dengan kredensial valid | `username` valid, `password` valid | `200 OK` | `status: "success"`, serta mengembalikan `accessToken` dan `refreshToken`. |
| **AUTH-02** | **(Negatif)** Login dengan *username* salah atau tidak terdaftar | `username` tidak terdaftar, `password` valid | `401 Unauthorized` | `status: "error"`, `message: "Username or password invalid"`, `code: 401`. |
| **AUTH-03** | **(Negatif)** Login dengan *password* salah | `username` valid, `password` salah | `401 Unauthorized` | `status: "error"`, `message: "Username or password invalid"`, `code: 401`. |
| **AUTH-04** | **(Negatif)** Login tanpa mengirimkan *username* | `password` saja (tanpa `username`) | `400 Bad Request` | `status: "error"`, `message: "\"username\" is required"`, `code: 400`. |
| **AUTH-05** | **(Negatif)** Login tanpa mengirimkan *password* | `username` saja (tanpa `password`) | `400 Bad Request` | `status: "error"`, `message: "\"password\" is required"`, `code: 400`. |
| **AUTH-06** | **(Negatif)** Login dengan *body request* kosong | `{}` (Object kosong) | `400 Bad Request` | Pesan error validasi (misal: username & password required). |

---

### 2. Endpoint Registration

**Endpoint:** `POST /registry`
**Deskripsi:** Mendaftarkan pengguna baru dengan *username*, *email*, *phone*, dan *password*.

| ID Test | Skenario Pengujian | Input Payload (Request Body) | Ekspektasi Status Code | Ekspektasi Respons |
| --- | --- | --- | --- | --- |
| **REG-01** | **(Positif)** Registrasi dengan data lengkap dan valid | `username`, `email` (format valid), `phone`, `password` (semua baru & valid) | `201 Created` | `status: "success"`, `message: "User registered successfully"`. |
| **REG-02** | **(Negatif)** Registrasi dengan *username* yang sudah terdaftar | `username` yang sudah ada di database, email & data lain valid | `409 Conflict` | `status: "error"`, `message: "Username has been used by another user"`, `code: 409`. |
| **REG-03** | **(Negatif)** Registrasi dengan format email yang tidak valid | `email: "johndoe.com"` (tanpa @), data lain valid | `400 Bad Request` | `status: "error"`, `message: "\"email\" must be a valid email"`, `code: 400`. |
| **REG-04** | **(Negatif)** Registrasi tanpa field *username* | Mengirimkan `email`, `phone`, `password` saja | `400 Bad Request` | `status: "error"`, `message: "\"username\" is required"`, `code: 400`. |
| **REG-05** | **(Negatif)** Registrasi tanpa field *password* | Mengirimkan `username`, `email`, `phone` saja | `400 Bad Request` | `status: "error"`, `message: "\"password\" is required"`, `code: 400`. |
| **REG-06** | **(Negatif)** Registrasi dengan *body request* kosong | `{}` (Object kosong) | `400 Bad Request` | Pesan error validasi dari skema data. |

---