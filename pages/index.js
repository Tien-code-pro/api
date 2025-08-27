export async function getServerSideProps(context) {
  const { link } = context.query;

  // Nếu có link hợp lệ thì redirect
  if (link && typeof link === "string" && link.startsWith("http")) {
    return {
      redirect: {
        destination: link,
        permanent: false,
      },
    };
  }

  // Nếu không có link → trả về JSON lỗi
  context.res.statusCode = 400; // đặt HTTP status = 400
  return {
    props: {
      error: {
        message: "Bad Request",
        error: {
          code: 400,
          info: [],
        },
      },
    },
  };
}

export default function Home({ error }) {
  if (error) {
    // Xuất JSON lỗi thay vì HTML
    return <pre style={{ color: "red" }}>{JSON.stringify(error, null, 2)}</pre>;
  }

  return null;
}
