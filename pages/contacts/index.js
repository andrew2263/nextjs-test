import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //const data = null;

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};

const Contacts = ({ contacts }) => {
  /*
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setContacts(data);
    }
    fetchData();
  }, []);
*/
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts List" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
