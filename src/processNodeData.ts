// const typicalTxData = {"jsonrpc":"2.0","id":0,"result":{"query":"tm.event='Tx'","data":{"type":"tendermint/event/Tx","value":{"TxResult":{"height":"596","tx":"N2IyMjcwNjE3OTZjNmY2MTY0MjIzYTdiMjI2MzY4NjE2OTZlNWY2OTY0MjIzYTIyNzg2OTYxNmUyZDc0NjU3Mzc0NmU2NTc0MmQzMTMxMjIyYzIyNjM2ZjZlNzQ3MjYxNjM3NDIyM2EyMjYzNmY2ZTVmNjM2Zjc1NmU3NDY1NzIyMjJjMjI2Njc1NmU2Mzc0Njk2ZjZlMjIzYTIyNjk2ZTYzNzI2NTZkNjU2ZTc0NWY2MzZmNzU2ZTc0NjU3MjIyMmMyMjZiNzc2MTcyNjc3MzIyM2E3YjdkMmMyMjZlNmY2ZTYzNjUyMjNhMzQyYzIyNzM2NTZlNjQ2NTcyMjIzYTIyNjYzODM0NjU2MTY1MzEzNDM4MzczMjM5NjIzMTMyNjYzNzM5MzgzNzM1NjI2NTM4MzgzOTM5MzMzMzYxNjQzMzM3Mzg2NjY2NjEzNDY0MzQ2NjYzNjIzNTY1NjMzNjM1NjQzMjY1MzMzMTM0NjIzODM3MzMzMDYyMzE2NjYzNjUyMjJjMjI3Mzc0NjE2ZDcwNzM1ZjczNzU3MDcwNmM2OTY1NjQyMjNhMzg3ZDJjMjI2ZDY1NzQ2MTY0NjE3NDYxMjIzYTdiMjI3MzY5Njc2ZTYxNzQ3NTcyNjUyMjNhMjIzNjM4MzEzNDY1MzkzMjM2MzAzMDY0MzgzODYyNjYzODMwMzYzNjM1Mzg2MTM5MzYzODM3NjMzOTM5NjUzODMzNjIzNjM4MzgzNTMyMzAzNzMyNjEzMDY0MzIzMTYyMzgzNDYyMzg2NDYyMzc2NDYzNjIzNTM3NjUzNzMzNjIzODYzMzUzNjYxMzQzNjM0NjY2MzYxMzY2MTY0MzI2MjM1MzMzODM3MzIzODY2MzUzMzY0MzMzMTM1NjUzMTM2NjU2NDY1MzQ2NTY1NjQzNzY1NjU2MzY1NjM2NjMzNjQ2NDYyNjI2NTYyMzIzNzMwMzEzODYzMzEzNTMxMzkzMDYyMjI3ZDdk","result":{"data":"eyJoYXNoIjogIjI1OGEwZGY2Y2ZlYzRhN2Y1ZmZmZWMyZDMwOGU1MWIwMWE1ODNmMDEzOGM2Mjg4YzYwNzI0YmNiMGUxY2EyNTMiLCAicmVzdWx0IjogIjI0IiwgInJld2FyZHMiOiB7ImRldmVsb3Blcl9yZXdhcmQiOiB7ImVlMDZhMzRjZjA4YmY3MmNlNTkyZDI2ZDM2YjkwYzc5ZGFiYTI4MjliYTk2MzQ5OTJkMDM0MzE4MTYwZDQ5ZjkiOiAiMC4wNzg0In0sICJmb3VuZGF0aW9uX3Jld2FyZCI6IHsiN2ZhNDk2Y2EyNDM4ZTQ4N2NjNDVhOGEyN2ZkOTViMmVmZTM3MzIyM2Y3YjcyODY4ZmJhYjIwNWQ2ODZiZTQ4ZSI6ICIwLjAwMTYwMDAwIn0sICJtYXN0ZXJub2RlX3Jld2FyZCI6IHsiN2ZhNDk2Y2EyNDM4ZTQ4N2NjNDVhOGEyN2ZkOTViMmVmZTM3MzIyM2Y3YjcyODY4ZmJhYjIwNWQ2ODZiZTQ4ZSI6ICIwLjAzOTIwMDAwIiwgImRmZjVkNTRkOWMzY2RiMDRkMjc5YzNjMGExMjNkNmE3M2E5NGUwNzI1ZDdlYWM5NTVmZGY4NzI5OGRiZTQ1YTYiOiAiMC4wMzkyMDAwMCJ9fSwgInN0YW1wc191c2VkIjogOCwgInN0YXRlIjogW3sia2V5IjogImNvbl9jb3VudGVyLmFkZHJlc3NfdG9fY291bnRlcjpmODRlYWUxNDg3MjliMTJmNzk4NzViZTg4OTkzM2FkMzc4ZmZhNGQ0ZmNiNWVjNjVkMmUzMTRiODczMGIxZmNlIiwgInZhbHVlIjogMX0sIHsia2V5IjogImNvbl9jb3VudGVyLmNvdW50ZXIiLCAidmFsdWUiOiAyNH0sIHsia2V5IjogImN1cnJlbmN5LmJhbGFuY2VzOjdmYTQ5NmNhMjQzOGU0ODdjYzQ1YThhMjdmZDk1YjJlZmUzNzMyMjNmN2I3Mjg2OGZiYWIyMDVkNjg2YmU0OGUiLCAidmFsdWUiOiAiNTkxMjE0NjYuNDU3OTgyMDUzNTIyODg3NzUifSwgeyJrZXkiOiAiY3VycmVuY3kuYmFsYW5jZXM6ZGZmNWQ1NGQ5YzNjZGIwNGQyNzljM2MwYTEyM2Q2YTczYTk0ZTA3MjVkN2VhYzk1NWZkZjg3Mjk4ZGJlNDVhNiIsICJ2YWx1ZSI6ICIxNTAzLjU1NzgwMDAwIn0sIHsia2V5IjogImN1cnJlbmN5LmJhbGFuY2VzOmVlMDZhMzRjZjA4YmY3MmNlNTkyZDI2ZDM2YjkwYzc5ZGFiYTI4MjliYTk2MzQ5OTJkMDM0MzE4MTYwZDQ5ZjkiLCAidmFsdWUiOiAiMTMuNjAzMzk3NDgifSwgeyJrZXkiOiAiY3VycmVuY3kuYmFsYW5jZXM6Zjg0ZWFlMTQ4NzI5YjEyZjc5ODc1YmU4ODk5MzNhZDM3OGZmYTRkNGZjYjVlYzY1ZDJlMzE0Yjg3MzBiMWZjZSIsICJ2YWx1ZSI6ICI0MjUwMS45NjcyIn1dLCAic3RhdHVzIjogMH0=","events":[{"type":"StateChange","attributes":[{"key":"con_counter_address_to_counter__f84eae148729b12f79875be889933ad378ffa4d4fcb5ec65d2e314b8730b1fce","value":"1","index":false},{"key":"con_counter_counter","value":"24","index":false},{"key":"currency_balances__7fa496ca2438e487cc45a8a27fd95b2efe373223f7b72868fbab205d686be48e","value":"59121466.45798205352288775","index":false},{"key":"currency_balances__dff5d54d9c3cdb04d279c3c0a123d6a73a94e0725d7eac955fdf87298dbe45a6","value":"1503.55780000","index":false},{"key":"currency_balances__ee06a34cf08bf72ce592d26d36b90c79daba2829ba9634992d034318160d49f9","value":"13.60339748","index":false},{"key":"currency_balances__f84eae148729b12f79875be889933ad378ffa4d4fcb5ec65d2e314b8730b1fce","value":"42501.9672","index":false}]}]}}}},"events":{"StateChange.con_counter_counter":["24"],"StateChange.currency_balances__7fa496ca2438e487cc45a8a27fd95b2efe373223f7b72868fbab205d686be48e":["59121466.45798205352288775"],"StateChange.currency_balances__ee06a34cf08bf72ce592d26d36b90c79daba2829ba9634992d034318160d49f9":["13.60339748"],"tm.event":["Tx"],"tx.hash":["9A715265466AA33AC10F7847360B16BF5456DA0BA050B8EDCF60CAD83ABFE0C7"],"tx.height":["596"],"StateChange.con_counter_address_to_counter__f84eae148729b12f79875be889933ad378ffa4d4fcb5ec65d2e314b8730b1fce":["1"],"StateChange.currency_balances__dff5d54d9c3cdb04d279c3c0a123d6a73a94e0725d7eac955fdf87298dbe45a6":["1503.55780000"],"StateChange.currency_balances__f84eae148729b12f79875be889933ad378ffa4d4fcb5ec65d2e314b8730b1fce":["42501.9672"]}}}

// export const mockTxDataInString = () => {
//     const string = JSON.stringify(typicalTxData);
//     // console.log(string);
//     return string
// }

const decodeBs64 = (base64: string) => {
    try {
        const decoded = atob(base64);
        return decoded;
    } catch (error) {
        throw new Error('Failed to decode base64 string');
    }
}

const findUid = (txObject: any) => {
    const startsWith = "con_pixel_frames_info.S";
    const endsWithThing = "thing";
    const endsWithName = "name";
    const endsWithDescription = "description";
    
    let uid;
    let title;
    let description;

    const { state } = txObject;
    for (let stateChange of state){
        const { key, value } = stateChange;
        if (key.startsWith(startsWith)){
            if (key.endsWith(endsWithThing)){
                uid = key.split(":")[1];
            }
            if (key.endsWith(endsWithName)){
                title = value;
            }
            if (key.endsWith(endsWithDescription)){
                description = value;
            }
        }
        
    }
    return { uid, title, description };
}

export const process = (hex: string)=>{
    let txObject = JSON.parse(hex);
    const decoded = decodeBs64(txObject.result.data.value.TxResult.result.data);
    txObject = JSON.parse(decoded);
    const uid = findUid(txObject);

    return uid
}