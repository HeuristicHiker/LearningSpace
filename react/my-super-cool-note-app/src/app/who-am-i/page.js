import ClientPage from "./clientPage";
import WhoAmI from "./whoAmI";

// TODO need to be able to understand this better

export default async function WhoAmIPage() {
  return (
    <ClientPage id={1}>
      <WhoAmI />
    </ClientPage>
  );
}
