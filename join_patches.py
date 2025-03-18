# this script mainly exists to combine the patch generated with the ui editor tool
# and the hold to pickup patch

patch1 = 'bin/0064P'  # change for the path to your edited ui patch
patch2 = 'bin/hold_to_pickup'  # assemble hold_to_pickup to get this

result = '0064P'

with open(patch1, 'rb') as p1, open(patch2, 'rb') as p2, open(result, 'wb') as out:
    out.write(p1.read()[:-8])
    out.write(p2.read())
