import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface ApiReceived {
  response_code: number;
  results: [Question];
}
interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string];
}

export function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([] as Question[]);

  useEffect(() => {
    async function loadQuest() {
      const { data } = await api.get<ApiReceived>(
        `api.php?amount=${localStorage.getItem("amountQuestions")}`
      );

      if (data) {
        console.log(data);
        const newQuestions = [...data.results];
        setQuestions(newQuestions);
      }
    }
    loadQuest();
    localStorage.removeItem("amountQuestions");
  }, []);

  return (
    <main>
      <form>
        {questions.map((question) => (
          <label key={question.question}>
            <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
            {question.incorrect_answers
              .concat(question.correct_answer)
              .map((answers) => (
                <label key={answers} htmlFor={answers}>
                  <input type="radio" value={answers} id={answers} />
                  <p>{answers}</p>
                </label>
              ))}
          </label>
        ))}
        <button>Terminar</button>
      </form>
    </main>
  );
}
