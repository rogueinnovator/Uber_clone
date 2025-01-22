import { useCaptainContext } from "../context/CaptainContext";

const CaptainHome = () => {
  const { captain } = useCaptainContext();
  console.log(captain);

  return (
    <div>
      {" "}
      this is captain home
      <h1>{captain.fullname.firstname}</h1>
      <h1>{captain.fullname.lastname}</h1>
    </div>
  );
};
export default CaptainHome;
