from array import array as _array
import time as _time
import hashlib as _hashlib
try:
    import pip
except:
    print('PIP Can\'t run in handled console')
try:
    import pyaudio as _pyaudio
except:
    pip.main(['install', 'PyAudio'])
import math as _math
import random as _random
import traceback as _traceback
import os as _os
_clear = lambda: _os.system('cls')
def _proc_seed(seed):
    modifiers = list(str(int(seed))) 
    OLD = seed
    if seed == 0:
        seed = 1
    if seed - _math.floor(seed) != 0:
        seed = int(seed * _math.pow(10, len(str(seed - _math.floor(seed)))))
    seed = seed + (_math.pi * seed)
    noise = abs(((_math.sin(seed) * 5024 / (seed / 103) + seed/7001074777777)))
    noise2 = abs(seed * 2 - _math.cos(seed) * 607 + seed)
    if noise < noise2:
        n2a = noise2; n1a = noise; noise = n2a; noise2 = n1a
    if seed > 100000000000000:
        seed = seed / ((noise - noise2) / 35)
    else:
        seed = seed * noise2 * noise       
    seed = int(seed) / _math.sqrt(int(seed))
    for x in range(0, len(str(int(seed)))):
        seed = seed / (1.31 * (len(str(int(seed)))))
    for x in modifiers:
        if x == '0':
            continue
        seed = seed + (1 / int(x))
    return abs(_math.fmod(seed * 417.7, 5) / 4.9)
def random_mic():
    p = _pyaudio.PyAudio()
    stream = p.open(format=_pyaudio.paInt16, channels=1, rate=44100, input=True, output=True, frames_per_buffer=8)
    sd = sum(_array('h', stream.read(16)).tolist())
    return _proc_seed(abs(sd))
def random_py():
    return _proc_seed(_random.uniform(1, 100))
def random_time():
    return _proc_seed(int(_time.time() * 100000))

def _average(l):
    return sum(l) / len(l)
def _meter(num, denom):
    t = int(num / denom * 50)
    return '[' + ('#' * t) + (' ' * (50-t)) + '] ' + str(int(num / denom * 100)) + '%'
def _test(tries, itr, func=random_py, gui=False):
    if itr != -1:
        if gui:
            _clear()
        t = []
        for x in range(0, itr):
            t.append(_test(tries, -1, func, gui))
            if gui:
                _clear()
                print(_meter(x, itr))
        return _average(t)
    else:
        tx = []
        for i in range(0, tries):
            tx.append(func())
            print('\r' + _meter(i, tries), end='')
        return _average(tx)
def _experiment(source, tries=100, itr=100, times=10, gui=False):
    res = []
    for x in range(0, times):
        res.append(_test(tries, itr, source, gui))
    cp = ''
    dist = []
    for x in range(0, times):
        cp = cp + '- Test %s: %s\n' % (x + 1, res[x])
        dist.append(abs(0.5 - res[x]))
    x = open('datareport.txt', 'w')
    x.write(str(cp) + '\n\n' + str(_average(dist)))
    x.close()
    return (res, _average(dist), cp)
if __name__ == "__main__":
    print('RandomPy --Dylan Beswick 2015')
    dev = False
    local_tries = 100
    local_iter = 100
    local_tests = 10
    local_func = random_py
    while True:
        lss = input('Please Enter a function:\n')
        if lss == 'devMode':
            dev = True
            break
        try:
            local_func = locals()[lss]
            a = local_func
        except:
            print('The function must exist, return a seed, and take no parameters')
        else:
            break
    if dev:
        while True:
            q = input('RandPy> ')
            if q.lower() == 'quit':
                break
            try:
                exec(q)
            except:
                traceback.print_exc()
    if type(local_func) == str:
        local_func = locals()[local_func]
    print('Running tests...')
    _time.sleep(2)
    _experiment(local_func, local_tries, local_iter, local_tests, gui=True)
