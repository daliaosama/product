import './InfoWraper.css'
function InfoWraper(){
 return(
    <div id="infowraper">
        <label>PERFUME</label>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.</p>
        <div id="Price">
            <label id="price">$149.99</label>
            <label><del>$169.99</del></label>
        </div>
        <button id="Add">Add to Cart</button>
    </div>
 )
}
export default InfoWraper