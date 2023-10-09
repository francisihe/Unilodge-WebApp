Do not forget to setup the .env file in the root folder of your frontend or client app
Do not forget to include the file in your .gitignore file

Setup the following as well:
1.  VITE_API_BASE_URL=(set this to the url of your backend api) (e.g http://127.0.0.1:4000/api)

The primary color for the app is within the tailwind config file
The custom defined CSS are in the index.css file

For Prod build, clarify if you need to set up the server object and the following in the Vite configuration:

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
})