## Installation

If you want to install this project on your computer you need to copy this project

```bash
git clone https://github.com/InkSmile/Junior-FullStack-project.git
```
Then you need to install [Docker](https://docs.docker.com/engine/install/)

Run command

```bash
docker-compose up
```

Wait until docker buil your project. In your browser enter url http://localhost:3000

If docker does not work for some reason you can install the project manually

First, create virtual enviroment

```bash
python -m venv venv
```
or
```bash
python3 -m venv venv
```
Then install all packages
```bash
pip install -r requirements.txt
```
Go to the folder where `manage.py` located

Run migrations
```bash
python manage.py migrate
```
Run server
```bash
python manage.py runserver
```

Now you need to run your frontend application

First, install [nodejs](https://nodejs.org)

Go to the `frontend_react` folder
Run
```bash
npm run build
```
Then
```bash
npm start
```
That`s it!
