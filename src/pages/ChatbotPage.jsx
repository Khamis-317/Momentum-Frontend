import Header from "../components/Header";
import Chat from "../components/Chat"
export default function LoginPage() {
  return (
    <>
      <div className="grid grid-rows-[100px_1fr]">
        <div>
          {" "}
          <Header />
        </div>
        <div>
          {" "}
          <Chat />
        </div>
      </div>
    </>
  );
}
