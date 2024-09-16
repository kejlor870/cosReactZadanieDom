import './App.css';
import Wizytowka from './mojeKomponenty/wizytowka';

function App() {
  const osoby = [
    {
      imie: 'Jan Kowalski',
      opis: 'Jestem programista pozdrawiam',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkf4GA2F7u5TYQcCPKeNXQVmKDcTtdEwu2Q&s',
      profilowe: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkf4GA2F7u5TYQcCPKeNXQVmKDcTtdEwu2Q&s'
    },
    {
      imie: 'Szymon Nowak',
      opis: 'Jestem profesionalnym szambonurkiem.',
      link: 'https://i1.jbzd.com.pl/contents/2021/10/normal/gSSSeHX0luh8VRlqSgIV1Dp66AGx5QlA.jpg',
      profilowe: 'https://i1.jbzd.com.pl/contents/2021/10/normal/gSSSeHX0luh8VRlqSgIV1Dp66AGx5QlA.jpg'
    },
    {
      imie: 'Krystian Cysterna',
      opis: 'Zajmuje się transportem od 30 lat.',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5c-OxTkbD6vnJ8-826gIXiZSC3XgIUjVBA&s',
      profilowe: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5c-OxTkbD6vnJ8-826gIXiZSC3XgIUjVBA&s'
    },
    {
      imie: 'Adam Sigiemka',
      opis: 'Moja wizytowka.sigma',
      link: 'https://marianchrzan.pl/storage/2023/07/zdjecie_profilowe_linkedIn.jpeg',
      profilowe: 'https://marianchrzan.pl/storage/2023/07/zdjecie_profilowe_linkedIn.jpeg'
    }
  ];

  return (
    <div className="app">
      {osoby.map((osoby, index) => (
          <Wizytowka
            key={index}
            imie={osoby.imie}
            opis={osoby.opis}
            link={osoby.link}
            profilowe={osoby.profilowe}
          />
        ))
      }

    </div>
  );
}

export default App;
