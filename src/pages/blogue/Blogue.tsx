import { Card, MainContent } from "./style";
import call from '../../assets/call-icon.png';
import time from '../../assets/time-seat-icon.png';
import watch from '../../assets/watch-icon.png';

export function Blogue() {
  return (
    <MainContent>
        <main>
            <Card>
                <img src={ call } />
                <h2>Casos de emergência</h2>
                <h1>922-000-002</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi rem 
                  reprehenderit ducimus ipsam, tenetur, voluptate quam delectus ipsa ratione
                </p>
            </Card>
            <Card className="green">
                <img src={ time } />
                <h2>Horário dos médicos</h2>
                <h1>922-000-002</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi rem 
                  reprehenderit ducimus ipsam, tenetur, voluptate quam delectus ipsa ratione
                </p>
            </Card>
            <Card>
                <img src={ watch } />
                <h2>Horário de Funcionamento</h2>
                <h1>922-000-002</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi rem 
                  reprehenderit ducimus ipsam, tenetur, voluptate quam delectus ipsa ratione
                </p>
            </Card>
        </main>
    </MainContent>
  );
}