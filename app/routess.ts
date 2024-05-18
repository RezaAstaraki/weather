

export async function GET() {
    const response = await fetch('https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403')
    try {
        const responseApi = await response.json()
    }
    catch {
        
    }
    console.log(responseApi)
    
}