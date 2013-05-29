var inst_to_type = {
    // control transfer instructions
    "j": Jtype,
    "jal": Jtype,
    "beq": Btype,
    "bne": Btype,
    "blt": Btype,
    "bge": Btype,
    "bltu": Btype,
    "bgeu": Btype,
    "jalr.c": Itype,
    "jalr.r": Itype,
    "jalr.j": Itype,
    "rdnpc": Itype,

    // memory instructions
    "lb": Itype,
    "lh": Itype,
    "lw": Itype,
    "ld": Itype,
    "lbu": Itype,
    "lhu": Itype,
    "lwu": Itype,
    "sb": Btype,
    "sh": Btype,
    "sw": Btype,
    "sd": Btype,

    // atomic memory instructions
    "amoadd.w": Rtype,
    "amoswap.w": Rtype,
    "amoand.w": Rtype,
    "amoor.w": Rtype,
    "amomin.w": Rtype,
    "amomax.w": Rtype,
    "amominu.w": Rtype,
    "amomaxu.w": Rtype,
    "amoadd.d": Rtype,
    "amoswap.d": Rtype,
    "amoand.d": Rtype,
    "amoor.d": Rtype,
    "amomin.d": Rtype,
    "amomax.d": Rtype,
    "amominu.d": Rtype,
    "amomaxu.d": Rtype,

    // integer compute instructions
    "addi": Itype,
    "slli": Itype,
    "slti": Itype,
    "sltiu": Itype,
    "xori": Itype,
    "srli": Itype,
    "srai": Itype,
    "ori": Itype,
    "andi": Itype,
    "add": Rtype,
    "sub": Rtype,
    "sll": Rtype,
    "slt": Rtype,
    "sltu": Rtype,
    "xor": Rtype,
    "srl": Rtype,
    "sra": Rtype,
    "or": Rtype,
    "and": Rtype,
    "mul": Rtype,
    "mulh": Rtype,
    "mulhsu": Rtype,
    "mulhu": Rtype,
    "div": Rtype,
    "divu": Rtype,
    "rem": Rtype,
    "remu": Rtype,
    "lui": LUItype,

    // 32-bit integer compute instructions here, not necessary right now
    // since this is not a 64 bit implementation
    

    // TODO: add:
    // FP instructions
    // Miscellaneous Memory Instructions
    // System Instructions

};

function cItype(opcode, funct3, specialimm, specialrs1){
    this.opcode = opcode;
    this.funct3 = funct3;
    this.specialimm = specialimm;
    this.specialrs1 = specialrs1;
} 

var Ifields = {
    "jalr.c": new cItype(0x6B, 0x0),
    "jalr.r": new cItype(0x6B, 0x1),
    "jalr.j": new cItype(0x6B, 0x2),
    "rdnpc": new cItype(0x6B, 0x4, 0, 0),

    "lb": new cItype(0x03, 0x0),
    "lh": new cItype(0x03, 0x1),
    "lw": new cItype(0x03, 0x2),
    "ld": new cItype(0x03, 0x3),
    "lbu": new cItype(0x03, 0x4),
    "lhu": new cItype(0x03, 0x5),
    "lwu": new cItype(0x03, 0x6),

    "addi": new cItype(0x13, 0x0),
    "slli": new cItype(0x13, 0x1, 0), // needs to be or'd with shamt
    "slti": new cItype(0x13, 0x2),
    "sltiu": new cItype(0x13, 0x3),
    "xori": new cItype(0x13, 0x4),
    "srli": new cItype(0x13, 0x5, 0), // needs to be or'd with shamt
    "srai": new cItype(0x13, 0x5, 0x40), // needs to be or'd with shamt
    "ori": new cItype(0x13, 0x6),
    "andi": new cItype(0x13, 0x7),
}; 
