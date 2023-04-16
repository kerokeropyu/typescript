type ObjectG = {
  id: number,
  name: string
}

const funcG = <T extends ObjectG>(arg: T): void => {
  console.log(arg);
}

funcG<ObjectG>({id: 1, name: '流川'});