# CS2 training

## Training configurations

### DEATHMATCH 1xT vs 8xCT
```
sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; bot_kick; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_roundtime_defuse 60; mp_roundtime 60; mp_restartgame 1; mp_respawn_on_death_ct 1; mp_respawn_on_death_t 1; mp_ignore_round_win_conditions 1; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_difficulty 3; bot_dont_shoot 0; give weapon_awp; sv_infinite_ammo 1
```

### BOMB 1xT vs 8xCT
```
sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; bot_kick; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_roundtime_defuse 60; mp_roundtime 60; mp_restartgame 1;  bot_add_ct;bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_difficulty 3; give weapon_awp; sv_infinite_ammo 1
```

### train
```
sv_cheats 1;mp_maxmoney 16000;mp_startmoney 16000;mp_roundtime 60;mp_roundtime_defuse 60;mp_roundtime_hostage 60;mp_freezetime 0;bind alt noclip;bot_stop 1;bind o bot_place;bind p "toggle sv_showimpacts 0 1";mp_restartgame 1
```


## Aiming practice Web app
Trénování sledování cípohybujícího cíle v herním poli pomocí myši nebo trénování rychlositi a přesnosti klikání (střílení) na cíl.

# CS2 příkazy

* sv_cheats 1**: Povolení cheatovacích příkazů na serveru.
* mp_limitteams 0**: Zrušení limitu na počet hráčů v týmech, což umožňuje nepoměrné rozdělení hráčů mezi týmy.
* mp_autoteambalance 0**: Vypnutí automatického vyvažování týmů.
**bot_kick**: Vyhození všech botů ze hry.
* mp_maxmoney 65535**: Nastavení maximální možné částky peněz pro hráče na 65535.
* mp_startmoney 65535**: Nastavení startovních peněz pro hráče na 65535.
* mp_afterroundmoney 65535**: Nastavení peněz, které hráči obdrží po každém kole, na 65535.
**mp_roundtime_defuse 60**: Nastavení délky kola pro defuse mapy na 60 minut.
* mp_roundtime 60**: Nastavení délky kola na 60 minut.
* mp_restartgame 1**: Restartování hry po 1 sekundě.
**mp_respawn_on_death_ct 1**: Povolení respawnu CT hráčů po smrti.
* mp_respawn_on_death_t 1**: Povolení respawnu T hráčů po smrti.
* mp_ignore_round_win_conditions 1**: Ignorování podmínek pro výhru kola, kolo pokračuje bez ohledu na normální pravidla.
* bot_add_ct**: Přidání bota do CT týmu. Tento příkaz se opakuje osmkrát, což přidá celkem osm botů do CT týmu.
* bot_difficulty 3**: Nastavení obtížnosti botů na 3 (nejvyšší obtížnost).
* bot_dont_shoot 0**: Povolení botům střílet (nastavení na 0 znamená, že mohou střílet).
* give weapon_awp**: Dát hráči zbraň AWP.
* sv_infinite_ammo 1**: Povolení nekonečného množství munice.

