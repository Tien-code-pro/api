export async function getServerSideProps(context) {
  const { to } = context.query;

  // Nếu có to hợp lệ (bắt đầu bằng http) -> redirect
  if (to && typeof to === "string" && to.startsWith("http")) {
    return {
      redirect: {
        destination: to,
        permanent: false,
      },
    };
  }

  // Nếu không có to -> trả JSON lỗi
  context.res.statusCode = 400;
  context.res.setHeader("Content-Type", "application/json");
  context.res.end(
    JSON.stringify({
      message: "Bad Request",
      error: {
        code: 400,
        info: [],
      },
    })
  );
  // context.res.end(); // ✅ dừng response tại đây
  return { props: {} }; // tránh lỗi của Next.js
}

export default function Home() {
  return null; // vì đã end() response bằng JSON
}
