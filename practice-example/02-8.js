//forEach 구문
function parse(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk) =>{
        const [key, value] = chunk.split('=');
        result[key] = value;
    });
    
    return result;
}

//map() 함수
function parse(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    const result = chunks.map((chunk) =>{
        const [key, value] = chunk.split('=');
        return {key: key, value: value};
    });
    
    return result;
}

//reduce() 함수
function parse(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    return chunks
    .map((chunk)=>{
        const [key, value] = chunk.split('=');
        return { key, value };
    })
    .reduce((result, item)=>{
        result[item.key] = item.value;
        return result;
    }, {});
}