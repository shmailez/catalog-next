import ProfileInfo from "@/components/Profile";
import ProfileCatalogWrap from "@/components/ProfileCatalogWrap";

export default function Profile() {
  return (
    <>
      Profile
      <ProfileInfo />
      <h1>Мои статьи</h1>
      <ProfileCatalogWrap />
    </>
  );
}
