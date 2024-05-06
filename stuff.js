let Stuff = (()=>{
        const ONE=1, TWO=2, THREE=3
	let name="", age=37, job="developper"

	function getName() {
            return name;
	}


	return {
            getName : getName
	}
})()

alert(`Name : ${Stuff.getName()}`)
