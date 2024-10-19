import PageWithProvider from "./page-with-provider";
import { getDictionary } from "./dictionaries";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const data = await getDictionary(lang);
  return <PageWithProvider data={data} />;
}
