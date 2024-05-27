import { useState } from 'react';
import Button from './Components/Button/index';
import Input from './Components/Input/index';
import { Container, Content, Row } from './styles';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operationCurrent, setOperatioCurrent] = useState('')
  const [firstNumber, setFirstNumber] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperatioCurrent('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleResult = () => {

    if (firstNumber !== '0' && operationCurrent !== '' && currentNumber !== '0') {

      switch (operationCurrent) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        default:
          break;
      }
    }
  }

  const handleNegOrPosNumber = () => {
    setCurrentNumber(prev => prev.startsWith('-') ? prev.slice(1) : `-${prev}`);
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperatioCurrent('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus));
      setOperatioCurrent('-')
    }
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperatioCurrent('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperatioCurrent('+')
    }
  }

  const handlePerCentNumber = () => {
    setCurrentNumber(currentNumber !== '0' ? `${Number(currentNumber) / 100}` : '0');
  }

  const handlePointNumber = () => {
    currentNumber.slice(-1) !== ',' ? handleAddNumber(',') : handleAddNumber('')
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperatioCurrent('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperatioCurrent('/')
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperatioCurrent('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperatioCurrent('*')
    }

  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={'C'} onClick={handleOnClear} />
          <Button label={'+/-'} onClick={handleNegOrPosNumber} />
          <Button label={'%'} onClick={handlePerCentNumber} />
          <Button label={'/'} onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label={'7'} onClick={() => handleAddNumber('7')} />
          <Button label={'8'} onClick={() => handleAddNumber('8')} />
          <Button label={'9'} onClick={() => handleAddNumber('9')} />
          <Button label={'*'} onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label={'4'} onClick={() => handleAddNumber('4')} />
          <Button label={'5'} onClick={() => handleAddNumber('5')} />
          <Button label={'6'} onClick={() => handleAddNumber('6')} />
          <Button label={'-'} onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label={'1'} onClick={() => handleAddNumber('1')} />
          <Button label={'2'} onClick={() => handleAddNumber('2')} />
          <Button label={'3'} onClick={() => handleAddNumber('3')} />
          <Button label={'+'} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={'0'} onClick={() => handleAddNumber('0')} />
          <Button label={','} onClick={handlePointNumber} />
          <Button label={'='} onClick={handleResult} />
        </Row>
      </Content>
    </Container>
  );
}
export default App;
