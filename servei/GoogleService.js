async function  getidiomes() {

    fetchidiomas= await fetch("http://server247.cfgs.esliceu.net/piano/google/translate/languages", {
        method:   "POST"});
        const idiomas = await fetchidiomas.json();
        return idiomas.map(r => new Idioma(r.id, r.name));
}