import { useState, Dispatch, useEffect } from "react"
import Button from "../../components/Button"
import { COMPUTER, PERSON } from "../../utils/src/constants"
import { turnType } from "../../types"






export default function Play() {
    const [stage, setStage] = useState<number>(1)
    const [starting, setStarting] = useState<number>(0)
    const [turn, setTurn] = useState<number>(0)
    const [currentNumber, setCurrentNumber] = useState<number>(0)
    const [history, setHistory] = useState<turnType[]>([])
    const [begin, setBegin] = useState<number>(0)
    return(
        <div className="flex flex-col container max-h-[calc(100vh-160px)] mx-auto mt-20 bg-white rounded p-2 overflow-auto items-center">
            {stage == 1 && 
                <Stage1
                starting={starting}
                setHistory={setHistory}
                setCurrentNumber={setCurrentNumber}
                setStage={setStage}
                setStarting={setStarting}
                setTurn={setTurn}
                setBegin={setBegin}
                />
            }

            {stage == 2 && 
                <Stage2
                begin={begin}
                currentNumber={currentNumber}
                history={history}
                setBegin={setBegin}
                setCurrentNumber={setCurrentNumber}
                setHistory={setHistory}
                setTurn={setTurn}
                starting={starting}
                turn={turn}
                />
            }
        </div>
    )
}

function Stage1({starting, setStage, setStarting, setTurn, setCurrentNumber, setHistory, setBegin}: {starting: number ,setStage: Dispatch<number>, setStarting: Dispatch<number>, setTurn: Dispatch<number>, setCurrentNumber: Dispatch<number>, setHistory: Dispatch<turnType[]>, setBegin: Dispatch<number>}) {
    const [loading, setLoading] = useState<boolean>(false)
    return(
        <div className="flex flex-col w-full items-center space-y-2">
            <div className="flex flex-col w-full sticky -top-2 items-center bg-white backdrop-blur-sm bg-opacity-70 p-2">
                <h1>Hazırlık Aşaması</h1>
                <hr/>
            </div>
            <div className="flex flex-col sm:flex-row w-full space-x-2">
                <div className="flex flex-col flex-1 bg-green-600 text-white p-2 rounded items-center space-y-2">
                    <h2>Kimin Başlayacağını Seçeceğim</h2>
                    <hr/>
                    <div className="flex flex-col w-full hover:bg-green-800 space-y-2 border-gray-300 border p-2 rounded transition-all">
                        <h3>Ben Başlayacağım</h3>
                        <hr/>
                        <p>Bunu seçerseniz ilk hamleyi siz yapacaksınız ancak hangi sayıdan başlayacağınıza bilgisayar karar verecek.</p>
                        <Button className="btnGreen" loading={loading} onClick={() => start1()}>
                            Onayla
                        </Button>
                    </div>
                    <div className="flex flex-col w-full hover:bg-green-800 space-y-2 border-gray-300 border p-2 rounded transition-all">
                        <h3>Bilgisayar Başlasın</h3>
                        <hr/>
                        <p>Bunu seçerseniz ilk hamleyi bilgisayar yapacak ve hangi sayıdan başlayacağınıza bilgisayar karar verecek.</p>
                        <Button className="btnGreen" loading={loading} onClick={() => start2()}>
                            Onayla
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col flex-1 bg-blue-600 text-white p-2 rounded items-center space-y-2">
                    <h2>Hangi Sayıdan Başlayacağımızı Seçeceğim</h2>
                    <hr/>
                    <div className="flex flex-col w-full hover:bg-blue-800 space-y-2 border-gray-300 border p-2 rounded transition-all">
                        <p>Hangi sayıdan başlayacağınızı siz seçeceksiniz ancak ilk hamleyi kimin yapacağına bilgisayar karar verecek.</p>
                        <input className="inputBlue" type="number" min={20} onChange={((e: any) => setStarting(parseInt(e.target.value)))} placeholder="20'den daha büyük bir sayı"></input>
                        <Button className="btnBlue" loading={loading} onClick={() => chooseNumber()}>
                            Onayla
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
    
    async function start1 () {
        setLoading(true)
        let number: number = 1
        while (number%3 == 1 ) {
            let randomNumber: number = Math.floor(Math.random() * 100 ) + 20
            number = randomNumber
        }
        setStarting(number)
        setCurrentNumber(number)
        setTurn(PERSON)
        setBegin(PERSON)
        setStage(2)
        setLoading(false)
    }

    async function start2 () {
        setLoading(true)
        let number: number = 0
        while (number%3 != 1 ) {
            let randomNumber: number = Math.floor(Math.random() * 100 ) + 20
            number = randomNumber
        }
        setStarting(number)
        setCurrentNumber(number)
        setTurn(COMPUTER)
        setBegin(COMPUTER)
        setStage(2)
        setLoading(false)
    }

    async function chooseNumber () {
        setLoading(true)
        if (starting%3 == 1) {
            setStarting(starting)
            setCurrentNumber(starting)
            setTurn(COMPUTER)
            setBegin(COMPUTER)
            setStage(2)
            setHistory([
                {turn: COMPUTER, number: 21},
                {turn: PERSON, number: 20},
                {turn: COMPUTER, number: 19},

            ])
        }else {
            setStarting(starting)
            setCurrentNumber(starting)
            setTurn(PERSON)
            setBegin(PERSON)
            setStage(2)
        }
        setLoading(false)
    }
}

function Stage2({
    starting,
    turn,
    setTurn,
    currentNumber,
    setCurrentNumber,
    history,
    setHistory,
    begin,
    setBegin
}: {
    starting: number,
    turn: number,
    setTurn: Dispatch<number>,
    currentNumber: number,
    setCurrentNumber: Dispatch<number>,
    history: turnType[],
    setHistory: Dispatch<turnType[]>,
    begin: number,
    setBegin: Dispatch<number>
}) {
    useEffect(() => {
        if (turn == COMPUTER) {
            console.log('my turn')
        }
    }, [turn])
    return(
        <div className="flex flex-col w-full items-center space-y-2">
            <div className="flex flex-col w-full sticky -top-2 items-center bg-white backdrop-blur-sm bg-opacity-70 p-2 space-y-2">
                <h1>
                    Başlangıç Numarası: {starting} <br/>
                    Başlayan Kişi: {begin == PERSON? 'Kullanıcı': 'Bilgisayar'}
                </h1>
                <hr/>
                <div className="flex flex-col w-full max-w-sm p-2 rounded space-y-2">
                    {history.map((h, i) => {
                        return(
                            <div key={i} className="flex flex-row w-full p-2 rounded bg-blue-600 text-white">
                                <label className="flex w-10 border-r-white border-r items-center justify-center text-center"></label>
                                <label className="flex flex-1 w-full items-center text-center justify-center">{h.number}</label>
                                <label className="flex w-10 border-l-white border-l items-center justify-center text-center">-2</label>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}