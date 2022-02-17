module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b08729a00efbbc99ed7cf0ccc989988a'),
  },
});
