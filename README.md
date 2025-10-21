Nếu có file package.json
{
"name": "redirect-api",
"version": "1.0.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start"
},
"dependencies": {
"next": "14.2.5",
"react": "18.3.1",
"react-dom": "18.3.1"
}
}

thì chạy :

1. yarn install
2. yarn dev

   Nếu prj mới tinh
   thì chạy :

   npx create-next-app@latest api

   - Trong vercel đường dẫn bắt buộc phải có đuôi .vercel.app thì mới add được domain mới
   - Đoạn đường dẫn đầu thì thoải mái sửa theo mong muốn
