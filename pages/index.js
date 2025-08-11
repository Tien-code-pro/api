export async function getServerSideProps(context) {
  const { link } = context.query;

  if (link && link.startsWith("http")) {
    return {
      redirect: {
        destination: link,
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: "https://google.com", // fallback nếu không có link
      permanent: false,
    },
  };
}

export default function Home() {
  return null; // Không cần render gì cả
}
