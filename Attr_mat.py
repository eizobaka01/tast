get=cmds.ls(type="aiStandard")
for add in get:
    num=cmds.getAttr(add+".specularFresnel")
    if 0<num:
       cmds.select(add ,add=1)
  
cmds.hyperShade(objects='')

