Check notes frontend and backend notes.


For customization,

1. Adust models to accomodate others
2. Remove jwt in /bookings route to allow booking without being logged in.
3.  Auto resize image to reduce storage allocation
4.  Separate billing cycle for land and houses
5.  Implement one off sale or rent for houses
6.  Consider variable currency symbol for each property
7.  Add Hamburger menu on header beside logo 
8.  Implement blog area for webapp


Others:
1.  Implement Password Reser
2.  Implement Email notification for login
3.  Implement Payment Processing via mail and booking


// Errors to fix

1. Check the Image Uploader component, adjust the for loop to prevent memory leak

(node:81278) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)

2.  node:internal/errors:497
    ErrorCaptureStackTrace(err);
    ^

Error: querySrv ESERVFAIL _mongodb._tcp.unilodge-airbnb-cluster.irfgmhz.mongodb.net
    at QueryReqWrap.onresolve [as oncomplete] (node:internal/dns/promises:251:17) {
  errno: undefined,
  code: 'ESERVFAIL',
  syscall: 'querySrv',
  hostname: '_mongodb._tcp.unilodge-airbnb-cluster.irfgmhz.mongodb.net'
}