# Blog CRUD Application

This project is a blog application where authenticated users can create, update, read, and delete posts.

## Features

- User Authentication: Token authentication is used.
- CRUD Operations: Users can create, read, update, and delete posts.
- Home Page: Users are prompted to login or register.

## Project Structure

The project directory structure is as follows:

```
blog-crud/
│
├── backend/
│   ├── backend/            # Django project folder
│   ├── core/               # Django app folder
│   ├── manage.py           # Django manage.py file
│   └── requirements.txt    # Django requirements.txt file
│
└── frontend/
    ├── public/             # React public folder
    ├── src/                # React source folder
    │   ├── components/     # React components folder
    │   ├── App.js          # React main component
    │   ├── index.js        # React entry point
    │   └── ...             # Other React files
    └── package.json        # React package.json file
```


## Setup

1. Clone the github repo

    ```bash
    git clone https://github.com/prashant676a/blog_crud_app.git .
    ```

### Backend (Django)

2. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:

    ```bash
    python manage.py migrate
    ```

5. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

### Frontend (React)

1. Navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000` to access the frontend.
2. Follow the prompts to login or register.
3. Once logged in, you can perform CRUD operations on posts.


## Contributions
Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.