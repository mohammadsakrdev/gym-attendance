# gym-attendance

To manage gym attendance, control enrollment

To start up the containers, we can open the terminal (or command prompt) in the root folder of our project and issue the below command:

\$ docker-compose up

Another useful command for docker compose is when you want to rebuild a new image for your container. Basically, this is for a case where you have made some changes to your application code and want to rebuild the images:

\$ docker-compose up --build

you can still run the test like this:

\$ docker-compose run --rm project_name npm run test

We can now access the application documentation at http://localhost:3000/api/v0/explore
