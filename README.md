# Django NextJS Ecommerce web app



## Running the backend

- Clone repoistory or click use this template to create a similar repository on your profile
- Change into the backend directory `cd backend`
- Create virtual environment in the project base directory using venv `python3 -m venv venv`
- Activate virtual environment `source venv/bin/activate`
- Install dependencies `pip install requirements.txt`

- Create file for storing environment variables `touch .env`

- Add environment variables for development settings (Use different settings for staging and production environments)
```
SECRET_KEY=<random string>
DJANGO_SETTINGS_MODULE="shop.settings.development"
```
- Apply migrations `python manage.py migrate`
- Run server `python manage.py runserver`


## Running the backend

- Change into the frontend directory `cd frontend`
- Install dependencies `npm install`
- Run the frontend server `npm run dev`
