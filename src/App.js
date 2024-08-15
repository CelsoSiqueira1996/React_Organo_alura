import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82cffa'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#a6d157'
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#e06b69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db6ebf'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29'
    } 
]);

  const [collaboratorList, setCollaboratorList] = useState([]);

  function handleOnRegisterCollaborator(newCollaborator) {
    setCollaboratorList([...collaboratorList, {...newCollaborator, id: uuidv4()}]);
  }

  function onChangeColor(color, id) {
    setTimes(times.map((time) => {
      if(time.id === id) {
        time.cor = color;
      }
      return time;
    }));
  }

  function createTeam(team) {
    setTimes([...times, {...team, id: uuidv4()}]);
  }

  function solveFavorite(collaboratorId) {
    setCollaboratorList(collaboratorList.map((collaborator) => {
      if(collaboratorId === collaborator.id) {
        collaborator.favorito = !collaborator.favorito;
      }
      return collaborator;
    }));
  }

  return (
    <>
      <Banner />
      <Formulario 
        onRegisterCollaborator={handleOnRegisterCollaborator}
        times={times}
        onCreateTeam={createTeam}
      />
      {times.map((time) => {
        return <Time 
          key={time.id} 
          timeDaVez={time} 
          deleteCollaboratorFromList={(collaboratorId) => setCollaboratorList(collaboratorList.filter((element) => element.id !== collaboratorId))}
          collaborators={collaboratorList.filter((collaborator) => time.nome === collaborator.time)}
          handleOnChangeColor={onChangeColor}
          onClickFavorite={solveFavorite}
        />
      })}
      <Rodape />
    </>
  );
}

export default App;
