import ProfileInfo from "@/components/Profile";
import ProfileCatalogWrap from "@/components/ProfileCatalogWrap";

export default function Profile() {
  return (
    <>
      <ProfileInfo />
      <h1>Мои статьи:</h1>
      <ProfileCatalogWrap />
    </>
  );
}
