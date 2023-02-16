import Header from "./components/Header";
import IllustrationPicture from "./components/IllustrationPicture";
import QuestionSection from "./components/QuestionSection";

function App() {
  return (
    <main className="main container">
      <IllustrationPicture />
      <div>
        <Header />
        <QuestionSection />
      </div>
    </main>
  );
}

export default App;
