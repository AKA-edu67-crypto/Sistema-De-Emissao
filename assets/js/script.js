// Dados do bilhete aéreo vindos do sistema
const passageiro = "Zellyn D. Silva"
const vooNumero = "421"     //Precisa ter 5 dígitos (ex: 00412)
const assento = "7A"        // Precisa ter 3 caracteres na impressão (ex:  7A)
const destino = "Paris"     // Coluna de destino precisa ter 15 espaços fixos
const cartaomilhas = "45321098" // Mascarar deixando apenas os últimos 4 dígitos

// --- 1. PADSTART (Preenche o INÍCIO da string) ---
// Sintaxe: string.padStart(tamanhoAlvo, caractereDePreenchimento)
const vooFormatado = vooNumero.padStart(5, 0)
const assentoFormatado = assento.padStart(3, " ")

// --- 2. PADEND (Preenche o FINAL da string) ---
// Mantém o nome e o destino com largura fixa para criar colunas perfeitas no terminal
const nomeColuna = passageiro.padEnd(15, ".")
const destinoColuna = destino.padEnd(15, ".")

// --- 3. MÁSCARA COM PADSTART (Muito usado em segurança) ---
// Pegamos os últimos 4 dígitos e preenchemos o início com asteriscos até dar o tamanho original (8)
const ultimosDigitos = cartaomilhas.slice(-4)
const cartaoMascarado = ultimosDigitos.padStart(cartaomilhas.length, "*")

// --- 4. IMPRESSÃO DO CARTÃO DE EMBARQUE ---
console.log("=========================================");
console.log("       🎫 CARTÃO DE EMBARQUE VIRTUAL     ");
console.log("=========================================");
console.log(`PASSAGEIRO...: ${nomeColuna} || DESTINO...: ${destinoColuna}`)
console.log(`VOO...: ${vooFormatado}    ASSENTO...: ${assentoFormatado}`)
console.log(`MILHAS...: ${cartaoMascarado}`)
console.log("=========================================");