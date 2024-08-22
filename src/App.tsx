import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';
import { v4 as uuidv4 } from "uuid";
import { IColaborador } from './shared/interfaces/IColaborador';
import { ITime } from './shared/interfaces/ITime';

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

  const [collaboratorList, setCollaboratorList] = useState<IColaborador[]>([]);

  function handleOnRegisterCollaborator(newCollaborator: IColaborador) {
    setCollaboratorList([...collaboratorList, {...newCollaborator, id: uuidv4()}]);
  }

  function onChangeColor(color: string, id: string) {
    setTimes(times.map((time) => {
      if(time.id === id) {
        time.cor = color;
      }
      return time;
    }));
  }

  function createTeam(team: ITime) {
    setTimes([...times, {...team, id: uuidv4()}]);
  }

  function solveFavorite(collaboratorId: string) {
    setCollaboratorList(collaboratorList.map((collaborator) => {
      if(collaboratorId === collaborator.id) {
        collaborator.favorito = !collaborator.favorito;
      }
      return collaborator;
    }));
  }

  return (
    <>
      <Banner src="/imagens/banner.png" alt="O banner principal da página do Organo" />
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
