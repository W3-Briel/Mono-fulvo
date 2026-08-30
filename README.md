# Mono-fulvo
Gestiona los partidos de futbol que vos quieras. Stack: Nodejs - Prisma - Adonisjs - React - Typescript


Esquema inicial de datos: codigo mermaid
```md
erDiagram
    PARTIDO {
        int id PK
        string adminDni "DNI del creador"
        string adminPin "PIN de acceso"
        string guestLink "UUID para invitados"
        datetime date "Fecha del partido"
        string location "Lugar/Cancha"
        int maxPlayers "Cupo máximo"
        float totalCost "Costo de la cancha"
        string status "ACTIVO, CANCELADO, FINALIZADO"
        datetime createdAt
        datetime updatedAt
    }

    PLAYERS {
        int id PK
        int partido_id FK
        string name "Nombre del jugador"
        string status "CONFIRMADO, EN_ESPERA, EXPULSADO"
        string paymentStatus "PENDIENTE, TRANSFERENCIA, EFECTIVO"
        datetime createdAt
        datetime updatedAt
    }

    POZO {
        int id PK
        int partido_id FK
        float balance "Plata actual recaudada"
        float expectedTotal "Monto objetivo"
        datetime createdAt
        datetime updatedAt
    }

    HISTORIAL_POZO {
        int id PK
        int pozo_id FK
        string description "Ej: Gaseosas, Seña, Pago jugador X"
        float amount "Monto del movimiento"
        string type "INGRESO, EGRESO"
        datetime createdAt
        datetime updatedAt
    }

    COMENTARIO {
        int id PK
        int partido_id FK
        int player_id FK
        string comentario "Contenido del mensaje"
        datetime createdAt
        datetime updatedAt
    }

    PARTIDO ||--o{ PLAYERS : "tiene"
    PARTIDO ||--|| POZO : "gestiona"
    POZO ||--o{ HISTORIAL_POZO : "registra"
    PARTIDO ||--o{ COMENTARIO : "alberga"
    PLAYERS ||--o{ COMENTARIO : "escribe"
```

Documentación mínima inicial:
https://docs.google.com/document/d/1gFbV-T7vjKssO31ixcPZhWrYe9GcNveeCtu4OjGb000/edit?usp=sharing


