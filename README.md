Install dependencies: npm install (Have in mind that this project uses a firestore database to store the data submitted, and my keys are kept locally within my environment variables)

Start development mode: npm start

For this project I have used formik to manage the form, all the inputs are required and required certain norms to be validated, feedback is given to the user in real time, changing UI to let them know if they are complying with the form requirements.

Once form is validated, the data submitted is stored in firebase (firestore). My firabase keys are stored in a .env.local file so that they stay private.

When the forma is succesfully submited, user will receive a modal message indicating data was successfully submitted, then they will be able to press ok and go back to the form (which will be empty again)
