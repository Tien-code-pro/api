export async function getServerSideProps(context) {
  const { link } = context.query;

  if (link) {
    return {
      redirect: {
        destination: link,
        permanent: false, // false = 302, true = 301
      },
    };
  }

  return {
    props: {}, // Nếu không có link thì hiển thị trang mặc định
  };
}

export default function Home() {
  return <h1>Vui lòng truyền ?link=URL để redirect</h1>;
}
