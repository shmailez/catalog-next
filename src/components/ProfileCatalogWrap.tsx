import { getCatalogDataMokky } from "@/services/catalogService";
import ProfileCatalogList from "./ProfileCatalogList";

export default async function ProfileCatalogWrap() {
  const post = await getCatalogDataMokky();
  return (
    <>
      <ProfileCatalogList post={post} />
    </>
  );
}
