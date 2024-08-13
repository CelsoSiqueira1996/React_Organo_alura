import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    } 
];

  const [collaboratorList, setCollaboratorList] = useState([]);

  function handleOnRegisterCollaborator(newCollaborator) {
    setCollaboratorList([...collaboratorList, newCollaborator]);
    console.log(newCollaborator); 
  }

  return (
    <>
      <Banner />
      <Formulario 
        onRegisterCollaborator={handleOnRegisterCollaborator}
        times={times}
      />
      {times.map((time) => {
        return <Time 
          key={time.nome} 
          timeDaVez={time} 
          collaborators={collaboratorList.filter((collaborator) => time.nome === collaborator.time)}
          />
      })}
      <Rodape />
    </>
  );
}

export default App;
