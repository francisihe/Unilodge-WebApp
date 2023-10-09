Do not forget to setup the .env file and the following variables.
Do not forget to include the file in your .gitignore file along with your node_modules

I temporarily switched the "start" command in package.json file to use nodemon for auto restart

1.  MONGO_URL (MongoDB cluster application connection string - with username and password. Include database name after the / just before ?retryWrites string)
2.  Within the index file, set up the following

    const jwtSecret = '(your-secret-key for jwt)';
    const bucket = '(your amazon bucket name if using AWS for storage)';

3.  S3_ACCESS_KEY (Your AWS Amazon Access Key)
4.  S3_SECRET_ACCESS_KEY (Your AWS Secret key)
5.  JWT_SECRET
6.  S3_BUCKET_NAME
